export async function generateSha256Checksum(jsonPayload) {
  const payload =
    typeof jsonPayload === "string" ? jsonPayload : JSON.stringify(jsonPayload);
  const encoder = new TextEncoder();
  const dataAsUint8Array = encoder.encode(payload);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataAsUint8Array);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}
