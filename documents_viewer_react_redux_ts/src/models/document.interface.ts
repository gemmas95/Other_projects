export default interface IDocument {
  id: string;
  type: "simple" | "custom" | "advanced";
  title: string;
  date: string;
  text?: string;
  image?: string;
}
