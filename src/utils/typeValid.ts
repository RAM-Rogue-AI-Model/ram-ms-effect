import { StatName } from '../../generated/prisma/enums';

function isStatName(value: unknown): value is StatName {
  return (
    typeof value === 'string' &&
    Object.values(StatName).includes(value as StatName)
  );
}
export { isStatName };
