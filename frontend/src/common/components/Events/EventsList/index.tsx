import Section from '@components/shared/Section';
import { useEvent } from 'src/common/hooks/api/event';
import { EventItem } from './EventItem';
export default function EventsList() {
  const { data } = useEvent();
  return (
    <>
      {data && data.length > 0 && (
        <>
          <Section title="Upcoming Events">
            <>
              {data.map((event, index) => (
                <EventItem key={event.id} event={event} index={index} />
              ))}
            </>
          </Section>
        </>
      )}
    </>
  );
}
