import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Shield, Calendar, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function AccountPage() {
  // In a real app, you'd get this from server-side props or a client component
  // For now, we'll simulate the user data
  const user = {
    id: "1",
    name: "Demo User",
    email: "demo@mrmwoodcraft.com",
    role: "dealer" as const,
    joinDate: "2024-01-15",
    lastLogin: "2024-09-25",
  }

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "admin":
        return "destructive"
      case "dealer":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Account Centre</h1>
          <p className="text-muted-foreground">
            Manage your account information and preferences
          </p>
        </div>

        {/* Account Information */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Your basic account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                <p className="text-lg font-semibold">{user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                <p className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {user.email}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Account Type</label>
                <div className="mt-1">
                  <Badge variant={getRoleBadgeVariant(user.role)}>
                    <Shield className="h-3 w-3 mr-1" />
                    {user.role === "dealer" ? "Dealer Portal" : "Administrator"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Account Activity
              </CardTitle>
              <CardDescription>
                Your account status and activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                <p className="text-lg font-semibold">
                  {new Date(user.joinDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Last Login</label>
                <p className="text-lg font-semibold">
                  {new Date(user.lastLogin).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Account Status</label>
                <div className="mt-1">
                  <Badge variant="default" className="bg-green-600">
                    Active
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Account Actions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Account Actions</CardTitle>
            <CardDescription>
              Quick actions to manage your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" disabled>
                Edit Profile
              </Button>
              <Button variant="outline" disabled>
                Change Password
              </Button>
              <Button variant="outline" disabled>
                Notification Settings
              </Button>
              <Button variant="outline" disabled>
                Download Data
              </Button>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-destructive">Danger Zone</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="destructive" disabled>
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}