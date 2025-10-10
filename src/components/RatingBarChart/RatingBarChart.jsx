import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const RatingBarChart = ({ratings}) => {
    const sortingRatings = [...ratings].sort((a, b) => b.count - a.count);
    
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    data={sortingRatings}
                    layout="vertical"
                    margin={{ top: 0, right: 100, left: 0, bottom: 0 }}
                >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={90} />
                    <Bar dataKey="count" fill="#10B981" radius={[0, 6, 6, 0]}>
                        <LabelList
                            dataKey="count"
                            position="right"
                            offset={8}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingBarChart;
