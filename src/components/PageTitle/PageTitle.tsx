import PageTitleWrapper from './PageTitleStyle';

export default function PageTitle({ title }: { title: string }) {
  return (
    <PageTitleWrapper.Title>
      {title}
    </PageTitleWrapper.Title>
  );
}
