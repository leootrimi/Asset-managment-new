import { ResponsiveCalendar } from '@nivo/calendar'

const CalendarChart = ({ data }) => (
    <div style={{ height: 200 }}>
    <ResponsiveCalendar
        data={data}
        from="2015-01-01"
        to="2015-12-31"        
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
    </div>
)

export default CalendarChart