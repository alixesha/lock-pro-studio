import { describe, expect, it } from "vitest";
import { business } from "@/lib/business";

describe("Official business contact information", () => {
  it("uses the provided business name", () => { expect(business.name).toBe("MSP LOCK AND KEY"); });
  it("calls the provided phone number", () => { expect(business.phone).toBe("952-800-8017"); expect(business.telephone).toBe("tel:+19528008017"); });
  it("uses the provided business address for directions", () => { expect(business.address).toBe("4801 Portland Ave, Minneapolis, MN 55417"); expect(new URL(business.maps).searchParams.get("query")).toBe("4801 Portland Ave Minneapolis MN 55417"); });
});