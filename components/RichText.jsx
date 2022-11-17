import { render } from "storyblok-rich-text-react-renderer";

export default function RichText({ blok }) {
  return render(blok.content);
}
