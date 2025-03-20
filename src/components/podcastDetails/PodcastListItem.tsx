import moment from "moment";

const PodcastListItem = ({
  title,
  date,
  duration,
}: {
  title: string;
  date: string;
  duration: number;
}) => {
  return (
    <tr className="border-b-1 border-gray-200 odd:bg-gray-50">
      <td className="text-cyan-600 cursor-pointer text-sm p-1">{title}</td>
      <td className="text-sm p-1">{moment(date).format("l")}</td>
      <td className="text-sm p-1 text-center">{moment.utc(duration).format("HH:mm:ss")}</td>
    </tr>
  );
};

export { PodcastListItem };
