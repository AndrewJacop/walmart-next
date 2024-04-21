import "server-only";

import { cookies } from "next/headers";

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { SessionCookieOptions, getAuth } from "firebase-admin/auth";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY!.replace(
      /\\n/gm,
      "\n"
    ),
  }),
};
// const firebaseAdminConfig = {
//   credential: cert({
//     projectId: "frontend2024-9ebcb",
//     clientEmail:
//       "firebase-adminsdk-xbpao@frontend2024-9ebcb.iam.gserviceaccount.com",
//     privateKey:
//       "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC6nPDFzWg+Eeug\nLi5znjQso8yQlqncwze9Ve4xi4MX6r1Cj08Rx4yqJO4wBtfsYetOMyyMYF23t32J\nS/EMgCfqGHQhVdh9vH73clDj0xRtmuEfmv3qRXneaVF+wmjuRoRoAqza/KNDeyPv\nQBA/tmwfSKeiVLkHLMw0TtqrMujiNnLziZbF5Us2GhU8UxojjF4+tKDZ/hJrefIs\ngChVc/7h29zWaQL8uBfDL4CptpxGuFCVKOIUzLOiKvrmPIrivF9tg3cGJrQB+orS\nOH6669mCNuH1ka0jmZMjoJiwGJG0z54jkqjNocHfRfdUliDO9qZZRxbcRmLbL3rK\ncbRqUgfnAgMBAAECggEADihR6+/FdNAPPDvEsmjSNIDIyD9l66Wz2N1oEMIw0+Ov\nMBmHOiYVeeMLXwFl6D0ViP1A5/V3prR5Ba2JQBWI8a2hQdYtcnyWdVdq453j8tzJ\nL4imsttKf6El2aQOKeWXrfxl+Mcp67iv5TrLAMpqMYVlkl8zGmQ/qchBtrNKD79I\na+/GHPahyGoBvUKvxrhPq8yVT0ahm31SLWf6olWvRqb+teWdxGfSVQNz2+llvxBQ\nrVqCrfcS0fr0P10WYLnpQDMoGAYdQ9cKUA+mWh4LjUoxIYK2NY44kVSl4w81yo4y\nN9+MZ9Gk8IAs97x4MVoEBNW3D6kFDdxVGmke3e9p4QKBgQDxxwmzeCrIUysoGmjF\nxUPnRrFGv0pCtNFUDtB37U/EwVxvpp5No7CHcUEwgwtD5JcETyQZzkmF6QRhLA8m\nEirS1mQlh83y64k9YBAIYLED5/VqemIJfOzameUfo4RI9+O3oaTaTIOV+hX547RQ\n4vIhfmIeH6BvdrsA9PPUC3vBhQKBgQDFlyxfCyrSBYtXB7zCr9YJmhXUp18efARj\nEqjj+2G5Y4WI8ch1z17z9V2wXS6oebVkSLznJNoM7CLHVF4ddiPhVZuy86BcEeVZ\nb/9adTBzZaXY6ZXOecE09PiuZ/dNy8Ayz0bDnxTdUQyyRcOKbAHFYKzAcNpunDJr\nEe1v9/LpewKBgDDKEooV4MRGDDpugeAO+7HrEREOvwSRCoDk8GqTB/rTbjzVqbJP\nKutaDmakuxw7P8JN2iIe/7U3HXwicPgkyGF9g/4S1puDrlElVnbqVC5Om7ad9bSm\ncgF29saYr7Qt2dUPmH243QDh05d2vMdp1KSvpUsg5LY5hmkeBSowGwwlAoGAFWEF\nAQehS3YkHHeO2fXSj9lnMUomxZKfmuSi93/0k+2LvkSC7xRP7s+GopWCfeIlWUNx\nhQT8vtcx8CVVxZRJz5DGtvcbS7r3+NRgabYyVtoRtsWXWu7bk9JJsf03yegY1KaO\nvo3Q4R1q5UMdJDYJfwS1zGCpkbw+zEz1Rt8qHk8CgYAf+ujWGqPlJJqslFlQCcJV\nxnWat3yXDYXi4kMmoboo4ujx9aUu8Vfhv+Sv/8jjpLGLvED6sofnbKaEqxa1VBVn\nHDSFlIoB4WYqkBZsj+Xgik7ESpOpk+MCWh1q0cNQyvSW8WJaY/+Zym74BPZsNe0l\nl0oBqaZi8VgaEXm9CWmKhg==\n-----END PRIVATE KEY-----\n",
//   }),
// };
// const firebaseAdminConfig = {
//   credential: cert({
//     projectId: "auth-1ae84",
//     clientEmail:
//       "firebase-adminsdk-qrsf6@auth-1ae84.iam.gserviceaccount.com",
//     privateKey:
//       "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDPlltbImbnb+OR\nluUsLyzdSxLuNVFOV6KEfr0Z9R3li/QnWfQaBkVQUt0aK0L/2eHeGI9lYAn5HWhV\nNQZA2VVCOasmoLbqQN5osHqIA38G4jVHo6mbX+Zoreri50qAuvlCv6obd4/AQAxA\nqDSM7StL2pG1NULkrYK9Peq8zc8Zup+DW7pXdknUkFnMy8RpuZuu9ggRB9dSNgTn\nvJG21/MnBMMGkz+6qMFWfp3ORzRTFIoBIOU0o/oxg2g7GHwNgLmzftlcIRxz6u+Y\nytihzrEAAZtkZiuVx8gj6x375IGti2wNArArz4lk4XRCDIFCjskjMkl5YoD2Rvjl\nx9Tj5E9HAgMBAAECggEAB4/3MQk+TXUeibnBDIyFamRnQqVPmnaH1aLWWcE7vxaL\npPlacq5CzSvPoTntPWvfFhu38Z3/jwM6v0vot+kS+ZAnQ4d8UmldkNvJAvZ5pLMN\n9NeqAJ6MQsj/Mxfw92KYXQ2lcU24P2015Q8bpvym5KMIRt0zXChUCHfeetVWk53P\nkOk6p76SGnStr6ZQZd+/XZ1bBZ+qtwzde6e0wLmjduTRPmr3aI8+pcKn/1xkeovm\nSSSH+RWSArdicoYfVxRReBlNz52rG8ruUyYWAoPNNVhVEcC13WsJnMPAJRiElqfa\n6YsUvpTuEWfb98Dd+n2tntwTwnr20gRai0/qlw6QLQKBgQDn2A08jMzqMwI6tSCe\nGvdsBZfTX1pJzgqMzs5P6mB85QE3xRRdeanXjECYGdsxv73+5guj3Qzjk2GLGQjI\n7//mhY4vRoXGabI8MgQDLx5K8076YHh12cs7/Py6NeqKE4O8jLO5ZHkG0qne/5Ll\nd44dUJR7jCNCD361FRALITpDmwKBgQDlN0+cMVvrcyZrZsz5XDMfRVtZhzJQltGA\n8PgT96Lr4V+wcA/6YHMtO+wFYZowC6hfyEVwxuKeR8YPwMz3cxsCa8ebWXuFD/Qr\n3EBbQRBlEaAyBzj4JYGqCRVt7C9KvHSQvQ1dbeS6ZkM7BIRAqrYH0Vy0uQEhTzNu\nC1IYd23rxQKBgGI/D/zkvcFRNFSkhNn7G3ZPOHN+KMi144qf6JW9AH5snQOBJIwo\nDm0lJgpOirCeTGlEGxKpjdiyj9deGHbuHUcWuZYXEIFwMPOJTmH7CZ9BU+qODv4B\n+TnGj2JpjqZMdrrj9RVPGmplw06Yhytuam7JwuJIFHjeEBe0gUP2JLaZAoGAMvga\npsO/CdsgJu/EEory/zgf+Qd8I7l1urNapq4BN2x1J7mzg9xgoCVb9VJfw+FDvpC9\nCDfheorBOw2HRlr9HYuz5hJ+yfbjN8GROfl82MyTj6xVebB1ZccBUeEcHwVK8khn\nqWffXaeRuZTmh66uLYzbjYA6BRskd4ri5XfhJHUCgYAWSSIC6Ayzc1R3x6a81qHE\nCS1bEMCkro3pb3l12cfidrsyOy2RWw5eQSt5A8JCs96Qbi50ddXO5Rtl4ecjPYxY\nwGgld07y+HBb5RDRwhjsi9cxOsMLfnRT0bigbqZQSUzGSCtj1WjSa+nETb9ivF00\nL/FClE6nUo4hzcZ1rnkpNA==\n-----END PRIVATE KEY-----\n",
//   }),
// };

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}

export const firebaseApp =
  getApps().find((it) => it.name === "firebase-admin-app") ||
  initializeApp(firebaseAdminConfig, "firebase-admin-app");
export const auth = getAuth(firebaseApp);

export async function isUserAuthenticated(
  session: string | undefined = undefined
) {
  const _session = session ?? (await getSession());
  if (!_session) return false;

  try {
    const isRevoked = !(await auth.verifySessionCookie(_session, true));
    return !isRevoked;
  } catch (error) {
    console.log("##admin-config->isUserAuthenticated##", error);
    return false;
  }
}

export async function getCurrentUser() {
  const session = await getSession();

  if (!(await isUserAuthenticated(session))) {
    return null;
  }

  const decodedIdToken = await auth.verifySessionCookie(session!);

  const currentUser = await auth.getUser(decodedIdToken.uid);

  return currentUser;
}

async function getSession() {
  try {
    return cookies().get("__session")?.value;
  } catch (error) {
    return undefined;
  }
}

export async function createSessionCookie(
  idToken: string,
  sessionCookieOptions: SessionCookieOptions
) {
  return auth.createSessionCookie(idToken, sessionCookieOptions);
}

export async function revokeAllSessions(session: string) {
  const decodedIdToken = await auth.verifySessionCookie(session);

  return await auth.revokeRefreshTokens(decodedIdToken.sub);
}
