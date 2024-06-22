import moment from "moment";

export default function formatDate(date: string, format: string): string {
  return moment(date).format(format);
}
