import Section from '@components/shared/Section';
import { useEvent } from 'src/common/hooks/api/event';
import { EventItem } from './EventItem';
export default function EventsList() {
  const { data, isLoading } = useEvent();
  if (isLoading) return <div>loading ...</div>;
  return (
    <Section title="Next Events">
      <>
        {data &&
          data.map((event, index) => (
            <EventItem key={event.id} event={event} index={index} />
          ))}
      </>
    </Section>
  );
}
