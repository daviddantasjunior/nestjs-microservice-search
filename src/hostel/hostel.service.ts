import { Injectable, Logger } from '@nestjs/common';
import { Hostel } from './hostel.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HostelService {
  private readonly logger = new Logger(HostelService.name);

  constructor(
    @InjectModel(Hostel.name)
    private readonly hostelModel: Model<Hostel>,
  ) {}

  async createHostel(hostel: Hostel): Promise<Hostel> {
    const createHostel = new this.hostelModel(hostel);
    return await createHostel.save();
  }

  async findAllHostels(): Promise<Hostel[]> {
    return await this.hostelModel.find().exec();
  }

  async findByIdHostel(_id: string): Promise<Hostel> {
    return await this.hostelModel.findOne({ _id }).exec();
  }

  async updateHostel(_id: string, hostel: Hostel): Promise<Hostel> {
    const { name, slug } = hostel;
    return await this.hostelModel
      .findOneAndUpdate({ _id }, { $set: { name, slug } }, { new: true })
      .exec();
  }

  async deleteHostel(_id: string): Promise<boolean> {
    const deleted = await this.hostelModel.deleteOne({ _id }).exec();
    return deleted > 0;
  }
}
