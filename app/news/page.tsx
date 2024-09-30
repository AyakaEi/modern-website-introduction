import { getNewsList } from '../_libs/microcms';
import NewsList from '../_components/newsList';
import { NEWS_LIST_LIMIT } from '../_contents';
import Pagination from '../_components/Pagination';
import SearchField from '../_components/SearchField';

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
