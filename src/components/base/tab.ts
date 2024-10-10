export type InfoTabData = {
  tabText: string;
  description: string;
  image: string;
};

export type InfoTab = InfoTabData & { id: number };

export const placeholderDescription =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.\n" +
  "\n" +
  "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

// export function toIndexed(infos: InfoTabData[]): InfoTab[] {
//   return infos.map((info, index) => ({ ...info, id: index }));
// }
