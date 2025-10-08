import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const RatingBarChart = ({ratings}) => {
    const sortingRatings = ratings.sort((a, b) => b.count - a.count);
    
    return (
        <div style={{ width: "80%", height: 250 }}>
            <ResponsiveContainer>
                <BarChart
                    data={sortingRatings}
                    layout="vertical"
                    margin={{ top: 16, right: 120, left: 24, bottom: 8 }}
                >
                    <XAxis type="number"  />
                    <YAxis type="category" dataKey="name" width={70} />
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