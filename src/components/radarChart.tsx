import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ClassWithEnrollments } from '../services/types';

interface SimpleRadarChartProps {
    classes: ClassWithEnrollments[];
}

const SimpleRadarChart: React.FC<SimpleRadarChartProps> = ({ classes }) => {
    const data = classes.map((aula) => ({
        subject: aula.title,
        A: aula.participants_count,
        fullMark: Math.max(...classes.map((aula) => aula.participants_count)) || 100,
    }));

    return (
        <ResponsiveContainer width={400} height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, Math.max(...data.map(d => d.fullMark)) || 100]} />
                <Radar name="Participantes" dataKey="A" stroke="#33333399" fill="#2D9CDB" fillOpacity={.5} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default SimpleRadarChart;
