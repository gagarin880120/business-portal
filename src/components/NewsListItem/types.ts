import { NewsItem } from '../../store/types';

export default interface NewsListItemTypes extends NewsItem {
  onItemClick: (id: number) => void
  currentNewsItemCardId: number
}
