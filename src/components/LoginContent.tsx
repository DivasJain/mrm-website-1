import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock, Building, FileText } from "lucide-react"

const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dealerCode: "",
    gstNumber: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("") // Clear error when user starts typing
  }

  const handleLogin = (type: "general" | "dealer") => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields")
      return
    }

    if (type === "dealer" && !formData.gstNumber) {
      setError("Please enter your GST number")
      return
    }

    if (type === "dealer" && !formData.dealerCode) {
      setError("Please enter your dealer code")
      return
    }

    // For static site, just show success message
    setError("")
    alert("Login functionality would be implemented with backend authentication.")
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground">Welcome to MRM</CardTitle>
          <p className="text-muted-foreground">Access your account or dealer portal</p>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="general">General Login</TabsTrigger>
              <TabsTrigger value="dealer">Dealer Portal</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6 mt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => handleLogin("general")}
              >
                Sign In
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-primary hover:text-primary/80">
                  Forgot Password?
                </Button>
              </div>

              <Separator />

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Don't have an account?</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Create Account
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="dealer" className="space-y-6 mt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="dealerCode">Dealer Code</Label>
                  <div className="relative mt-1">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="dealerCode"
                      placeholder="Enter dealer code"
                      className="pl-10"
                      value={formData.dealerCode}
                      onChange={(e) => handleInputChange("dealerCode", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="gstNumber">GST Number *</Label>
                  <div className="relative mt-1">
                    <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="gstNumber"
                      placeholder="Enter your GST number (e.g., 22AAAAA0000A1Z5)"
                      className="pl-10"
                      value={formData.gstNumber}
                      onChange={(e) => handleInputChange("gstNumber", e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    15-digit alphanumeric GST identification number
                  </p>
                </div>

                <div>
                  <Label htmlFor="dealerEmail">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="dealerEmail"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dealerPassword">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="dealerPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => handleLogin("dealer")}
              >
                Access Dealer Portal
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-primary hover:text-primary/80">
                  Forgot Dealer Credentials?
                </Button>
              </div>

              <Separator />

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Become a Dealer</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Join our network of authorized dealers and access exclusive benefits.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Apply for Dealership
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginContent
