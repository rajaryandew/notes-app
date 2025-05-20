import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { signup } from "@/lib/server-actions/signup"
export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
              <CardHeader>
                  <CardTitle>Sign up to Notes App</CardTitle>
                  <CardDescription>
                      Enter your email and password below to Sign in
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <form action={signup}>
                      <div className="flex flex-col gap-6">
                          <div className="grid gap-3">
                              <Label id="username-label" htmlFor="username">Username</Label>
                              <Input
                                  id="username"
                                  type="text"
                                  placeholder="username"
                                  name="username"
                                  required
                              />
                          </div>
                          <div className="grid gap-3">
                              <Label htmlFor="password">Password</Label>
                              <Input id="password" type="password" name="password" required />
                          </div>
                          <div className="flex flex-col gap-3">
                              <Button type="submit" className="w-full">
                                  Sign up
                              </Button>
                          </div>
                      </div>
                      <div className="mt-4 text-center text-sm">
                          Already have an account?{" "}
                          <a
                              href="/login"
                              className="underline underline-offset-4"
                          >
                              Login
                          </a>
                      </div>
                  </form>
              </CardContent>
          </Card>
      </div>
  );
}
