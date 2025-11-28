// src/templates/TemplateCreative.tsx
import React from "react";
import { Box, Typography, Chip, Avatar, Divider } from "@mui/material";
import type { TemplateData } from "./TemplateClassic";

export default function TemplateCreative({ data }: { data: TemplateData }) {
    const b = data.basic || {};
    return (
        <Box sx={{
            width: 880,
            maxWidth: "100%",
            bgcolor: 'background.paper',
            color: 'text.primary',
            fontFamily: "'Outfit', sans-serif",
            display: "flex",
            boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
            borderRadius: '14px',
        }}>
            {/* Sidebar */}
            <Box sx={{ width: 300, bgcolor: 'primary.main', color: '#fff', p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Avatar sx={{ width: 96, height: 96, mx: 'auto', mb: 2, bgcolor: 'primary.main', boxShadow: '0 6px 18px rgba(0,0,0,0.12)', fontSize: 36, fontWeight: 700 }}>
                        {b.name ? b.name.charAt(0).toUpperCase() : 'K'}
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.1 }}>{b.name || "Your Name"}</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>{b.title || "Creative Designer"}</Typography>
                </Box>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />

                <Box>
                    <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, letterSpacing: 1 }}>Contact</Typography>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="body2" sx={{ mb: 0.5 }}>{b.email}</Typography>
                        <Typography variant="body2" sx={{ mb: 0.5 }}>{b.phone}</Typography>
                        <Typography variant="body2" sx={{ mb: 0.5 }}>{b.city}, {b.state}</Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, letterSpacing: 1 }}>Skills</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                        {data.skills?.length ? data.skills.map((s, i) => (
                            <Chip key={i} label={s.name} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.12)', color: '#fff', border: 'none' }} />
                        )) : <Typography variant="body2" sx={{ opacity: 0.6 }}>Add skills</Typography>}
                    </Box>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                    <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, letterSpacing: 1 }}>Social</Typography>
                    {data.social?.length ? data.social.map((s, i) => (
                        <Typography key={i} variant="body2" sx={{ mb: 0.5 }}><a href={s.url} style={{ color: 'inherit', textDecoration: 'none' }}>{s.platform}</a></Typography>
                    )) : <Typography variant="body2" sx={{ opacity: 0.6 }}>Add social</Typography>}
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ flex: 1, p: 5, bgcolor: 'background.paper' }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, display: "inline-block", mb: 2 }}>Profile</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1 }}>{b.intro || "Creative professional with a passion for design and innovation. Experienced in building user-centric digital products."}</Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, display: "inline-block", mb: 2 }}>Experience</Typography>
                    {data.experience?.length ? data.experience.map((ex, i) => (
                        <Box key={i} sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{ex.position}</Typography>
                            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>{ex.org} | {ex.start} - {ex.end}</Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>{ex.description}</Typography>
                        </Box>
                    )) : <Typography variant="body2" color="text.secondary">Add experience</Typography>}
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, display: "inline-block", mb: 2 }}>Projects</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                        {data.projects?.length ? data.projects.map((p, i) => (
                            <Box key={i} sx={{ p: 2, bgcolor: 'action.hover', borderRadius: '14px' }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{p.title}</Typography>
                                <Typography variant="caption" display="block" sx={{ color: 'text.secondary', mb: 1 }}>{p.technologies}</Typography>
                                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>{p.description}</Typography>
                            </Box>
                        )) : <Typography variant="body2" color="text.secondary">Add projects</Typography>}
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, display: "inline-block", mb: 2 }}>Education</Typography>
                    {data.education?.length ? data.education.map((ed, i) => (
                        <Box key={i} sx={{ mb: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{ed.degree}</Typography>
                            <Typography variant="body2">{ed.institution}, {ed.year}</Typography>
                        </Box>
                    )) : <Typography variant="body2" color="text.secondary">Add education</Typography>}
                </Box>
            </Box>
        </Box>
    );
}
