export function clearCookie(res, cookieName) {
  res.cookie(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // secure ב-HTTPS בלבד
    sameSite: "lax", // בהתאם לצורך
    expires: new Date(0), // תאריך תפוגה ישן מנקה את העוגייה
  })
}
