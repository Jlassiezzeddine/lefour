import Section from '@components/shared/Section';
import { useEvent } from 'src/common/hooks/api/event';
import { EventItem } from './EventItem';
import Spacer from '@components/shared/Atoms/Spacer';
export default function EventsList() {
  const { data } = useEvent();
  return (
    <>
      {data && data.length > 0 && (
        <>
          <Spacer size={16} />
          <Section title="Upcoming Events">
            <>
              {data.map((event, index) => (
                <EventItem key={event.id} event={event} index={index} />
              ))}
            </>
          </Section>
          <Spacer size={16} />
        </>
      )}
    </>
  );
}
