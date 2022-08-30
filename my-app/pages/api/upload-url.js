import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: "bazarsthiti-265916",
    credentials: {
      client_email: "healthcare-demo@bazarsthiti-265916.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDRMQZJNLFWuo6c\nqPZPJM2fPisoVNVpSeyLpbZmRYot6TDkV7sNJ9GpBL6B5yON045GWO4d0CAzqnaD\n5OdsvBORWkrbHtCeJGx1A9TdfuV8f685Eh+wXBoxEWcbM6pVv5Gj6kXVuRowdr2g\nkpUtGr7788j27+0eKTsWYP4TKUbMmtzDgUuvqaoozO66/oQ21GpaR7jgGLl6sUQ4\nafjQeUoc3NxQLnGlGo6hWLwDFCbmlKzUzqU8lzelDBGTilTpfL+lY2taWMg0Bd4z\nggE8cAiVGAzo/aUvb8K42QytM/ugG530I3PPhUQHBJiZ4g65kmj00suTzygvPPH2\n7POd8YhJAgMBAAECggEADs3nYfrmqfqd6RxUAhnaq3Bc4YfPapoesWtS0z4Mn18n\nZKGIzU+KGOoLCWpwK7NTGEtm3plCDiX8KS1j62AMCndXYNZ3cRmmy0kwIVS/rOXk\nYqeTsolyGRLgNx6a6WKbTfxgYNWusstUdC6re/uulGoWSNOF9mJ4mgbXNEfxiL00\nKigWTsnN5sF6cU96zO61ssh1OqMmYy2cIMJeZpXCZwbpzeVfYctObVgkzozQi1Sb\naGh+n83m6zOOoUMoUQZ6L4TjK3OOmrsGe7gewZvISeiAQ5W6kZ3Mv/cvNTW2zYRw\nrYtaXUCdrRux+gOcuMnaLtC+W6wOmYiWhraFS8aWWQKBgQDtwxJdnP/EuWq/OKFG\nFPtzaGXsCTtBb0feoLYO4AUgQbeMVUQwc8DxorVOnMSwdG89lDiwRuUWAedXtNV3\nvFfDcJSmjQPp1t3vbEpCCkkvkuqOkQV4vWWcQIcDSl24gjEq1MM4MTuVX+mBDo7R\nMtKzG+yO68xgVbnZTX+7cFSJjwKBgQDhPOoaLnnyprlwmON5R6D1+rRtnuAP0Odk\nlCSPeammOZGsALNt8pvyZwnAtSbHIn1gZ1bBY9ahoa6dkHM0J81ESu/1d2f2omR4\nngIR5RFv7pg7xbMrfPK6E93zEKd0gTNMQ+oB9cZf2QmzUu/0+feD6bz+7IqooZaF\nqGAVDpl0pwKBgQCg0VkSyKaXQXLadEthQ7/wh6SoynWyBLrv8nQyC4RsFQc5fFLr\nEuBmkE9iJNdFIvw7Ao51bP52rEL2J/JbUqFqKDPjk24aNKNY1j5D/QETlKPiWmUB\nDdo0ndC0gRBzRFxNRCvnTiWnG4CtMlOXXHD3hOO0p/lND67tNGY5Ofl0MQKBgD62\nHhwSCqQT5ZfDCbqvxdIW7nuC+7GLoZFwacmEv0ZnyvZP76VSIjdYlu+PwG87XBsm\nSpJnwM+Z26tFF75SwqUcFDmM+GZECqNGox7mX3eBv+MMhXk7Pb2vYGGXpngarPS0\nCAhprMTtAfVqxyK3IkIZJyT3KRgQfX9TRQU33mQLAoGAFKgNJ1rBeprnl/4wkJrg\nj0Cu/eoeg10irFZ596GoOs0u03UuPFKyu+HEaM3jpSHmzo5NaouSdrweF2r6hIYg\n5QxN5kXWSnJaEPBT7YVvHeEQ6lmUzBAiU3s3hW/SKF+iyP3bTmyepeIKn0KaNt4L\n1cIsEx+718H2NKMD/SRSElo=\n-----END PRIVATE KEY-----\n",
    },
  });

  const bucket = storage.bucket("healthcare-demo-ggl");
  const file = bucket.file(req.query.file);
  const options = {
    expires: Date.now() + 1 * 60 * 1000, //  1 minute,
    fields: { 'x-goog-meta-test': 'data' },
  };

  const [response] = await file.generateSignedPostPolicyV4(options);
  res.status(200).json(response);
}
