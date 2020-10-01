import dayjs from 'dayjs';
import "dayjs/locale/sv";
import weekday from "dayjs/plugin/weekday";
dayjs.locale("sv");
dayjs.extend(weekday);

export default dayjs;