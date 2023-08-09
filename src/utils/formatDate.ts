export default function formatDate(date: Date) {
  // let options = {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: "long",
  }).format(date);
}
