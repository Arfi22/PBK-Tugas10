import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "../src/stores/user";
import axios from "axios";

vi.mock("axios"); // Mock axios agar tidak request ke server asli

describe("User Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("default state is kosong", () => {
    const store = useUserStore();
    expect(store.user).toBe(null);
    expect(store.isLoggedIn).toBe(false);
  });

  it("berhasil login user yang sudah terdaftar", async () => {
    const mockUser = {
      id: 1,
      nama: "Arfi Aksa",
      email: "arfiaksa@gmail.com",
      password: "arfiaksa",
      foto: "",
      alamat: "Pekanbaru",
    };

    // Mock response dari axios.get
    axios.get.mockResolvedValueOnce({ data: [mockUser] });

    const store = useUserStore();
    await store.login({ email: "arfiaksa@gmail.com", password: "arfiaksa" });

    expect(store.user).toEqual(mockUser);
    expect(store.isLoggedIn).toBe(true);
  });

  it("gagal login jika password salah", async () => {
    const mockUser = {
      id: 1,
      nama: "Arfi Aksa",
      email: "arfiaksa@gmail.com",
      password: "arfiaksa",
    };

    axios.get.mockResolvedValueOnce({ data: [mockUser] });

    const store = useUserStore();

    try {
      await store.login({ email: "arfiaksa@gmail.com", password: "salah" });
    } catch (err) {
      expect(err.message).toBe("Password salah.");
    }
  });

  it("logout mereset user dan isLoggedIn", () => {
    const store = useUserStore();
    store.user = { email: "arfiaksa@gmail.com" };
    store.isLoggedIn = true;

    store.logout();

    expect(store.user).toBe(null);
    expect(store.isLoggedIn).toBe(false);
  });
});
