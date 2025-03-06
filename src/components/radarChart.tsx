import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ClassWithEnrollments } from '../services/types';

interface SimpleRadarChartProps {
    classes: ClassWithEnrollments[];
}

const dataTeste = [
    {
        title: 'Math',
        participants_count: 1,
        B: 110,
        fullMark: 2,
    },
    {
        title: 'Chinese',
        participants_count: 2,
        B: 130,
        fullMark: 3,
    },
    {
        title: 'English',
        participants_count: 2,
        B: 130,
        fullMark: 3,
    },
    {
        title: 'Geography',
        participants_count: 3,
        B: 100,
        fullMark: 3,
    },
    {
        title: 'Physics',
        participants_count: 2,
        B: 90,
        fullMark: 3,
    },
    {
        title: 'History',
        participants_count: 2,
        B: 85,
        fullMark: 3,
    },
];

const SimpleRadarChart: React.FC<SimpleRadarChartProps> = ({ classes }) => {
    const data = classes.map((aula) => ({
        subject: aula.title,
        A: aula.participants_count,
        fullMark: Math.max(...classes.map((aula) => aula.participants_count)) || 100,
    }));

    console.log(data)

    return (
        <ResponsiveContainer width={400} height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={0} domain={[0, Math.max(...data.map(d => d.fullMark)) || 100]} />
                <Radar name="Participantes" dataKey="A" stroke="#33333399" fill="#2D9CDB" fillOpacity={.5} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default SimpleRadarChart;
