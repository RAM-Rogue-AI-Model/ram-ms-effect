import { CreateEffectInput } from '../types/effectInput';
import { prisma } from '../utils/mariaConnection';
import { sendLog } from '../utils/message';

class EffectService {
  async create(data: CreateEffectInput) {
    const dataSecured = {
      stat_name: data.stat_name,
      count: data.count,
      duration: data.duration,
      modificator: data.modificator,
    };
    try {
      const result = await prisma.effet.create({ data: dataSecured });
      void sendLog(
        'EFFECT',
        'INSERT',
        'INFO',
        `Effet créé avec l'ID: ${result.id}`
      );
      return result;
    } catch (error) {
      void sendLog(
        'EFFECT',
        'INSERT',
        'ERROR',
        `Erreur lors de la création de l'effet: ${String(error)}`
      );
      throw new Error("Erreur lors de la création de l'effet");
    }
  }

  async list() {
    try {
      const result = await prisma.effet.findMany();
      void sendLog(
        'EFFECT',
        'OTHER',
        'INFO',
        `Liste des effets récupérée, total: ${result.length}`
      );
      return result;
    } catch (error) {
      void sendLog(
        'EFFECT',
        'OTHER',
        'ERROR',
        `Erreur lors de la récupération de la liste des effets: ${String(error)}`
      );
      throw new Error('Erreur lors de la récupération de la liste des effets');
    }
  }
  async getById(id: string) {
    try {
      const result = await prisma.effet.findUnique({
        where: {
          id: id,
        },
      });
      if (result === null) {
        void sendLog(
          'EFFECT',
          'OTHER',
          'WARN',
          `Aucun effet trouvé avec l'ID: ${id}`
        );
        return null;
      }
      void sendLog(
        'EFFECT',
        'OTHER',
        'INFO',
        `Effet récupéré avec l'ID: ${id}`
      );
      return result;
    } catch (error) {
      void sendLog(
        'EFFECT',
        'OTHER',
        'ERROR',
        `Erreur lors de la récupération de l'effet avec l'ID ${id}: ${String(error)}`
      );
      return null;
    }
  }

  async update(id: string, data: CreateEffectInput) {
    const dataSecured = {
      stat_name: data.stat_name,
      count: data.count,
      duration: data.duration,
      modificator: data.modificator,
    };
    try {
      const existingEffect = await prisma.effet.findUnique({
        where: { id: id },
      });
      if (existingEffect === null) {
        void sendLog(
          'EFFECT',
          'UPDATE',
          'WARN',
          `Aucun effet trouvé avec l'ID: ${id} pour mise à jour`
        );
        throw new Error(`Aucun effet trouvé avec l'ID: ${id}`);
      }
      const result = await prisma.effet.update({
        where: { id: id },
        data: dataSecured,
      });
      void sendLog(
        'EFFECT',
        'UPDATE',
        'INFO',
        `Effet mis à jour avec l'ID: ${id}`
      );
      return result;
    } catch (error) {
      void sendLog(
        'EFFECT',
        'UPDATE',
        'ERROR',
        `Erreur lors de la mise à jour de l'effet avec l'ID ${id}: ${String(error)}`
      );
      throw new Error(
        `Erreur lors de la mise à jour de l'effet avec l'ID ${id}`
      );
    }
  }

  async delete(id: string) {
    try {
      const existingEffect = await prisma.effet.findUnique({
        where: { id: id },
      });
      if (existingEffect === null) {
        void sendLog(
          'EFFECT',
          'REMOVE',
          'WARN',
          `Aucun effet trouvé avec l'ID: ${id} pour suppression`
        );
        throw new Error(`Aucun effet trouvé avec l'ID: ${id}`);
      }
      const result = await prisma.effet.delete({
        where: { id: id },
      });
      void sendLog(
        'EFFECT',
        'REMOVE',
        'INFO',
        `Effet supprimé avec l'ID: ${id}`
      );
      return result;
    } catch (error) {
      void sendLog(
        'EFFECT',
        'REMOVE',
        'ERROR',
        `Erreur lors de la suppression de l'effet avec l'ID ${id}: ${String(error)}`
      );
      throw new Error(
        `Erreur lors de la suppression de l'effet avec l'ID ${id}`
      );
    }
  }
}

export { EffectService };
