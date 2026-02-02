import { StatName } from '../../generated/prisma/enums';

interface CreateEffectInput {
  stat_name: StatName;
  count: number;
  modificator: string;
  duration: number;
}

export { CreateEffectInput };
