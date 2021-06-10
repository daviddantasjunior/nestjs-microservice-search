import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload, MessagePattern } from '@nestjs/microservices';
import { Hostel } from './hostel.schema';
import { HostelService } from './hostel.service';

@Controller('hostel')
export class HostelController {
  logger = new Logger(HostelController.name);
  constructor(private readonly hostelService: HostelService) {}

  @EventPattern('create-hostel')
  async createHostel(@Payload() hostel: Hostel): Promise<Hostel> {
    return await this.hostelService.createHostel(hostel);
  }

  @MessagePattern('find-all-hostels')
  async findAllHostels(): Promise<Hostel[]> {
    return await this.hostelService.findAllHostels();
  }

  @MessagePattern('find-by-id-hostel')
  async findByIdHostel(@Payload() _id: string): Promise<Hostel> {
    return await this.hostelService.findByIdHostel(_id);
  }

  @EventPattern('update-hostel')
  async updateHostel(@Payload() data: any): Promise<Hostel> {
    const _id: string = data.id;
    const hostel: Hostel = data.updateHostelInput;
    return await this.hostelService.updateHostel(_id, hostel);
  }

  @EventPattern('delete-hostel')
  async deletarJogador(@Payload() _id: string): Promise<boolean> {
    return await this.hostelService.deleteHostel(_id);
  }
}
