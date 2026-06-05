import { useState } from "react";
import { AlertTriangle, Mail, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { companyContact } from "@/lib/companyContact";

const DeleteAccountContent = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <article className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Request Account Deletion
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You can request deletion of your Dash N Drop account and associated personal data.
              Once processed, your account will be permanently removed and you will no longer be
              able to sign in or access your order history through the app.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              How to Delete Your Account
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You may delete your account using one of the following methods:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">In the app:</span> Go to{" "}
                <span className="font-medium text-foreground">Profile → Settings → Delete Account</span>{" "}
                and follow the on-screen steps.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">By email:</span> Send a deletion
                request from your registered email address to{" "}
                <a
                  href={`mailto:${companyContact.email}?subject=Account%20Deletion%20Request`}
                  className="text-primary hover:underline"
                >
                  {companyContact.email}
                </a>
                .
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Using the form below:</span> Submit
                your account details and we will process your request.
              </li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              What Gets Deleted
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When your account is deleted, we remove or anonymise the following where applicable:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-muted-foreground leading-relaxed">Account profile and login credentials</li>
              <li className="text-muted-foreground leading-relaxed">Saved addresses and delivery preferences</li>
              <li className="text-muted-foreground leading-relaxed">Contact details linked to your account</li>
              <li className="text-muted-foreground leading-relaxed">App notification and marketing preferences</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Some information may be retained where required by law, for fraud prevention, dispute
              resolution, tax, accounting, or regulatory obligations. Retained data is kept only for
              as long as necessary for those purposes.
            </p>
          </article>

          <article className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Deletion Request Form
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Complete the form below to request account deletion. Online submission is not yet
                connected — use email or in-app deletion for now.
              </p>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30 p-4 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                This form is for display only and does not submit requests yet. To delete your
                account now, email{" "}
                <a
                  href={`mailto:${companyContact.email}?subject=Account%20Deletion%20Request`}
                  className="font-medium underline hover:no-underline"
                >
                  {companyContact.email}
                </a>{" "}
                from your registered email address.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-lg border border-border bg-muted/40 p-8 text-center space-y-3">
                <p className="text-lg font-semibold text-foreground">Request received (preview)</p>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Form submission is not active yet. Please contact{" "}
                  <a
                    href={`mailto:${companyContact.email}`}
                    className="text-primary hover:underline"
                  >
                    {companyContact.email}
                  </a>{" "}
                  to complete your deletion request.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="delete-email">Registered email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="delete-email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delete-phone">Registered phone number</Label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="delete-phone"
                        type="tel"
                        placeholder="+234 ..."
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="delete-reason">Reason for deletion (optional)</Label>
                  <Textarea
                    id="delete-reason"
                    placeholder="Tell us why you are leaving (optional)"
                    rows={4}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="delete-confirm"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-input"
                  />
                  <Label htmlFor="delete-confirm" className="text-sm font-normal leading-relaxed text-muted-foreground">
                    I understand that deleting my account is permanent and may not be reversible
                    once processing is complete.
                  </Label>
                </div>

                <Button type="submit" variant="destructive" className="w-full md:w-auto">
                  Request account deletion
                </Button>
              </form>
            )}
          </article>

          <article className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Need Help?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about account deletion or data retention, contact {companyContact.legalName} at{" "}
              <a href={`mailto:${companyContact.email}`} className="text-primary hover:underline">
                {companyContact.email}
              </a>
              . For more on how we handle personal data, see our{" "}
              <a href="/privacypolicy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DeleteAccountContent;
