import API from "@chris-kode/myanimelist-api-v2";
import pkceChallenge from "pkce-challenge";
export function malAuth() {
  const challenge = pkceChallenge();
  console.log(challenge);
  const oauth = new API.OAUTH("0d81e16b110d7f7448c093dd9d08c925");
  const pkce = pkceChallenge();
  const urlToRedirect = oauth.urlAuthorize(pkce.code_challenge);
}
