import { sanityFetch } from '@/sanity/lib/client'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { ScheduleEntry } from '@/types/sanity'
import { Clock, User } from 'lucide-react'

export const metadata = {
  title: 'Class Schedule | FITNESS FORGE',
  description: 'View our weekly class schedule and find the perfect time to train.',
}

const SCHEDULE_QUERY = `*[_type == "scheduleEntry"]{
  _id,
  day,
  time,
  className,
  "trainer": trainer->name
} | order(time asc)`

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export default async function SchedulePage() {
  const scheduleData = await sanityFetch<ScheduleEntry[]>({ query: SCHEDULE_QUERY })

  const groupedSchedule = DAYS.reduce(
    (acc, day) => {
      acc[day] = scheduleData.filter((entry) => entry.day === day)
      return acc
    },
    {} as Record<string, any[]>
  )

  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <SectionHeader
            subtitle="Timetable"
            title="Weekly Class Schedule"
            description="Find your rhythm. From early morning grinders to late-night lifters, our schedule is designed to fit your lifestyle."
          />

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            {DAYS.map((day) => (
              <div key={day} className="flex flex-col">
                <div className="bg-accent p-4 text-center">
                  <h3 className="font-black uppercase tracking-widest text-sm text-white">{day}</h3>
                </div>
                <div className="flex-1 bg-surface border-x border-b border-white/5 p-4 space-y-4">
                  {groupedSchedule[day]?.length > 0 ? (
                    groupedSchedule[day].map((entry) => (
                      <div
                        key={entry._id}
                        className="p-4 bg-black/40 border border-white/5 hover:border-accent/40 transition-colors group"
                      >
                        <div className="flex items-center gap-2 text-accent mb-2">
                          <Clock size={14} />
                          <span className="text-[10px] font-black uppercase tracking-tighter">
                            {entry.time}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm uppercase leading-tight mb-2 group-hover:text-accent transition-colors">
                          {entry.className}
                        </h4>
                        <div className="flex items-center gap-2 text-slate-500">
                          <User size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">
                            {entry.trainer}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center text-[10px] font-bold uppercase tracking-widest text-slate-600">
                      Rest Day
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Booking Notice */}
      <Section className="bg-surface border-t border-white/5">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto p-8 border border-white/10 bg-black/40">
            <h3 className="text-2xl font-black mb-4 uppercase">Booking Information</h3>
            <p className="text-slate-400 mb-8">
              All classes require 24-hour advance booking through the member app or at the front
              desk. Trial members please contact us to reserve your spot.
            </p>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest">High Intensity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-600" />
                <span className="text-xs font-bold uppercase tracking-widest">Fundamentals</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
