import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="font-times text-5xl">Welcome to Classic.</h1>
            <FieldDescription>
              Don&apos;t have an account? <a href="/register">Sign up</a>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="classic@example.com"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="**********"
              required
            />
          </Field>
          <Field>
            <Button
              type="submit"
              className="border border-gray-300 bg-transparent bg-[linear-gradient(155deg,rgba(240,240,240,0.2)_0%,rgba(219,219,219,0.3)_60%,rgba(200,200,200,0.2)_100%)] text-black shadow-[inset_0.5px_0.5px_1px_1.5px_rgba(255,255,255,0.75)] transition-all duration-200 ease-in-out active:scale-95"
            >
              Login
            </Button>
          </Field>
        </FieldGroup>
      </form>

      <a href="/" className="text-center text-xs text-gray-400">
        Go Back
      </a>
    </div>
  );
}
