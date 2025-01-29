export const localizedToday = new Date().toLocaleString("en-US", {
  timeZone: "America/Los_Angeles",
});

export const todayPST = new Date(localizedToday).toISOString();

export const dateParser = (date: string) =>
  `${new Date(date).getFullYear()}-${String(
    new Date(date).getMonth() + 1
  ).padStart(2, "0")}-${String(new Date(date).getDate()).padStart(2, "0")}`;
