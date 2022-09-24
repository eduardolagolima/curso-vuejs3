interface SetupPayload {
  onProduction: () => void;
  onDevelopment: () => void;
}

export default function setup({ onProduction, onDevelopment }: SetupPayload) {
  if (process.env.NODE_ENV !== 'production') {
    onDevelopment();
    return;
  }

  onProduction();
}
