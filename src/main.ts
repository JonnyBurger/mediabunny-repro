import { ALL_FORMATS, Input, UrlSource } from "mediabunny";

const input = new Input({
  source: new UrlSource("https://remotion.media/video.mp4"),
  formats: ALL_FORMATS,
});

input
  .computeDuration()
  .then(() => {})
  .catch(() => {});

input.dispose();
