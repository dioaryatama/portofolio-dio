declare module "aos" {
  export interface AosOptions {
    duration?: number;
    offset?: number;
    delay?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
}
