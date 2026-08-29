import { getSupabaseAdmin } from "@/lib/supabase/admin";

type MessageRow = {
  id: number;
  content: string;
  created_at: string;
};

const noStoreHeaders = { "Cache-Control": "no-store" };

export async function GET() {
  try {
    const { data, error } = await getSupabaseAdmin()
      .from("messages")
      .select("id, content, created_at")
      .eq("is_visible", true)
      .order("created_at", { ascending: false })
      .limit(3);

    if (error) throw error;

    const messages = ((data ?? []) as MessageRow[]).map(({ id, content, created_at }) => ({
      id,
      content,
      createdAt: created_at,
    }));

    return Response.json({ messages }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("Unable to load guestbook messages.", error);
    return Response.json({ error: "guestbook_unavailable" }, { status: 503, headers: noStoreHeaders });
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 2048) {
    return Response.json({ error: "payload_too_large" }, { status: 413, headers: noStoreHeaders });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_message" }, { status: 400, headers: noStoreHeaders });
  }

  try {
    const message = typeof body === "object" && body !== null && "message" in body
      ? (body as { message?: unknown }).message
      : undefined;

    if (typeof message !== "string") {
      return Response.json({ error: "invalid_message" }, { status: 400, headers: noStoreHeaders });
    }

    const normalizedMessage = message.trim();
    if (!normalizedMessage || normalizedMessage.length > 80) {
      return Response.json({ error: "invalid_message" }, { status: 400, headers: noStoreHeaders });
    }

    const { error } = await getSupabaseAdmin()
      .from("messages")
      .insert({ content: normalizedMessage, is_visible: false });

    if (error) throw error;

    return Response.json({ accepted: true }, { status: 202, headers: noStoreHeaders });
  } catch (error) {
    console.error("Unable to submit a guestbook message.", error);
    return Response.json({ error: "guestbook_unavailable" }, { status: 503, headers: noStoreHeaders });
  }
}
