"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Mail, Phone, CreditCard, Edit, Save, Award, } from "lucide-react"
import { useEffect, useState } from "react"
import { Separator } from "@/components/ui/separator"

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false)
    const [teacherData, setTeacherData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        passportNumber: "",
        bio: "",
        id: "",
    })

    useEffect(() => {
        // Get teacher data from sessionStorage
        setTeacherData({
            id: sessionStorage.getItem("id") || "",
            firstName: sessionStorage.getItem("teacherFirstName") || "Ma'lumot yo'q",
            lastName: sessionStorage.getItem("teacherLastName") || "Ma'lumot yo'q",
            email: sessionStorage.getItem("teacherEmail") || "Ma'lumot yo'q",
            phone: sessionStorage.getItem("teacherPhone") || "Ma'lumot yo'q",
            passportNumber: sessionStorage.getItem("teacherPassport") || "Ma'lumot yo'q",
            bio: sessionStorage.getItem("teacherBio") || "",
        })
        // window.history.replaceState({}, document.title, window.location.pathname)
    }, [])

    const handleSave = () => {
        // Save to sessionStorage
        sessionStorage.setItem("teacherFirstName", teacherData.firstName)
        sessionStorage.setItem("teacherLastName", teacherData.lastName)
        sessionStorage.setItem("teacherEmail", teacherData.email)
        sessionStorage.setItem("teacherPhone", teacherData.phone)
        sessionStorage.setItem("teacherPassport", teacherData.passportNumber)
        sessionStorage.setItem("teacherBio", teacherData.bio)
        setIsEditing(false)
    }




    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Profil</h1>
                    <p className="text-muted-foreground">Shaxsiy ma'lumotlaringizni ko'ring va tahrirlang</p>
                </div>
                <Button onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
                    {isEditing ? (
                        <>
                            <Save className="mr-2 h-4 w-4" />
                            Saqlash
                        </>
                    ) : (
                        <>
                            <Edit className="mr-2 h-4 w-4" />
                            Tahrirlash
                        </>
                    )}
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Profile Card */}
                <Card className="md:col-span-1">
                    <CardHeader className="text-center">
                        <div className="flex justify-center">
                            <Avatar className="h-24 w-24">
                                <AvatarFallback className="text-2xl">
                                    {teacherData.firstName?.[0] || "U"}
                                    {teacherData.lastName?.[0] || ""}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <CardTitle className="text-xl">
                            {teacherData.firstName} {teacherData.lastName}
                        </CardTitle>
                        <CardDescription>O'qituvchi • HEMIS tizimi</CardDescription>
                    </CardHeader>

                </Card>

                {/* Personal Information */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Shaxsiy Ma'lumotlar</CardTitle>
                        <CardDescription>Asosiy shaxsiy ma'lumotlaringiz</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">Ism</Label>
                                <div className="flex items-center space-x-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    {isEditing ? (
                                        <Input
                                            id="firstName"
                                            value={teacherData.firstName}
                                            onChange={(e) =>
                                                setTeacherData({ ...teacherData, firstName: e.target.value })
                                            }
                                        />
                                    ) : (
                                        <span className="text-sm">{teacherData.firstName}</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lastName">Familiya</Label>
                                <div className="flex items-center space-x-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    {isEditing ? (
                                        <Input
                                            id="lastName"
                                            value={teacherData.lastName}
                                            onChange={(e) =>
                                                setTeacherData({ ...teacherData, lastName: e.target.value })
                                            }
                                        />
                                    ) : (
                                        <span className="text-sm">{teacherData.lastName}</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    {isEditing ? (
                                        <Input
                                            id="email"
                                            type="email"
                                            value={teacherData.email}
                                            onChange={(e) =>
                                                setTeacherData({ ...teacherData, email: e.target.value })
                                            }
                                        />
                                    ) : (
                                        <span className="text-sm">{teacherData.email}</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Telefon</Label>
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    {isEditing ? (
                                        <Input
                                            id="phone"
                                            value={teacherData.phone}
                                            onChange={(e) =>
                                                setTeacherData({ ...teacherData, phone: e.target.value })
                                            }
                                        />
                                    ) : (
                                        <span className="text-sm">{teacherData.phone}</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="passport">Pasport</Label>
                                <div className="flex items-center space-x-2">
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                    {isEditing ? (
                                        <Input
                                            id="passport"
                                            value={teacherData.passportNumber}
                                            onChange={(e) =>
                                                setTeacherData({ ...teacherData, passportNumber: e.target.value })
                                            }
                                        />
                                    ) : (
                                        <span className="text-sm">{teacherData.passportNumber}</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="position">Lavozim</Label>
                                <div className="flex items-center space-x-2">
                                    <Award className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Katta o'qituvchi</span>
                                </div>
                            </div>
                        </div>

                        <Separator />
                        <div className="space-y-2">
                            <Label htmlFor="bio">Qisqacha ma'lumot</Label>
                            {isEditing ? (
                                <Textarea
                                    id="bio"
                                    placeholder="O'zingiz haqingizda qisqacha ma'lumot yozing..."
                                    className="min-h-[100px]"
                                    value={teacherData.bio}
                                    onChange={(e) => setTeacherData({ ...teacherData, bio: e.target.value })}
                                />
                            ) : (
                                <p className="text-sm text-muted-foreground">
                                    {teacherData.bio || "Bio ma'lumot yo'q"}
                                </p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Subjects */}
            <Card>
                <CardHeader>
                    <CardTitle>O'qitayotgan Fanlar</CardTitle>
                    <CardDescription>Hozirda o'qitayotgan fanlar ro'yxati</CardDescription>
                </CardHeader>

            </Card>
        </div>
    )
}