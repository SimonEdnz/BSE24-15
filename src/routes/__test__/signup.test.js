import { expect, test } from "vitest";

test("returns a 200 on successful signup", async () => {
  const mockUser = {
    username: "Jelly",
    gender: "female",
    email: "kirabo@gmail.com",
    phoneNumber: "078xxxxxx",
    role: "superadmin",
    password: "password",
  };

  const mockSignUp = (username, gender, email, phoneNumber, role, password) => {
    if (email && username && gender && phoneNumber && role && password) {
      return { statusCode: 200, message: "Account sign up successful" };
    }
    return { statusCode: 401, message: "Invalid credentials" };
  };

  const response = mockSignUp(
    mockUser.username,
    mockUser.gender,
    mockUser.email,
    mockUser.phoneNumber,
    mockUser.role,
    mockUser.password
  );

  expect(response.statusCode).toBe(200);
  expect(response.message).toBe("Account sign up successful");
});
