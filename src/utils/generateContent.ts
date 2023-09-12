import { nanoid } from "nanoid"

export const generateContent = (length: number) => {
  const id = nanoid(7);
  const layout = {
    x: (length * 4.5) % 12,
    y: Infinity, // puts it at the bottom
    w: 4,
    h: 4,
    i: id,
  }
  return {
    id,
    title: `Report(${length + 1})`,
    content: {
      layout,
      options: {}
    }
  }
}