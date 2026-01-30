import { CreateEffectInput } from '../types/effectInput';
import { prisma } from '../utils/mariaConnection';

class EffectService {
  async create(data: CreateEffectInput) {
    const dataSecured = {
      stat_name: data.stat_name,
      count: data.count,
      duration: data.duration,
      modificator: data.modificator,
    };
    return prisma.effet.create({ data: dataSecured });
  }

  async list() {
    return prisma.effet.findMany();
  }

  async getById(id: string) {
    return prisma.effet.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, data: CreateEffectInput) {
    const dataSecured = {
      stat_name: data.stat_name,
      count: data.count,
      duration: data.duration,
      modificator: data.modificator,
    };
    return prisma.effet.update({
      where: {
        id: id,
      },
      data: dataSecured,
    });
  }

  async delete(id: string) {
    return prisma.effet.delete({
      where: {
        id: id,
      },
    });
  }
}

export { EffectService };
