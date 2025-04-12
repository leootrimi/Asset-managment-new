import { ResponsiveRadialBar } from '@nivo/radial-bar'

const RoundedChart = ({ data }) => (
    <div style={{ height: 300 }} className='flex-1'>
    <ResponsiveRadialBar
        data={data}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 10, right: 40, bottom: 10, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </div>
)

export default RoundedChart