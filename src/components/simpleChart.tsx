import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ClassWithEnrollments } from '../services/types';
import dayjs from 'dayjs';

interface SimpleLineChartProps {
    classes: ClassWithEnrollments[];
}

const SimpleLineChart: React.FC<SimpleLineChartProps> = ({ classes }) => {
    const dataByMonth = classes.reduce((acc, aula) => {
        const month = dayjs(aula.scheduled_at).format('YYYY-MM'); 
        if (!acc[month]) {
            acc[month] = { month, participants: 0, classCount: 0 };
        }
        acc[month].participants += aula.participants_count;
        acc[month].classCount += 1;
        return acc;
    }, {} as Record<string, { month: string, participants: number, classCount: number }>);

    const data = Object.values(dataByMonth).sort((a, b) => {
        return dayjs(a.month).isBefore(dayjs(b.month)) ? -1 : 1;
    });

    return (
        <ResponsiveContainer width={400} height={300}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="participants" name="Participantes" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="classCount" name="Aulas" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default SimpleLineChart;
