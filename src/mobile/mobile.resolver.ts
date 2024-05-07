import { Args, Int, Mutation, Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { Mobile } from "./schema/mobile.schema";
import { MobileService } from "./mobile.service";
import { AddMobileArgs } from "./args/addmobile.args";
import { UpdateMobileArgs } from "./args/updatemobile.args";


@Resolver(of => Mobile)
export class MobileResolver{
    constructor(private readonly mobileService: MobileService){}

    @Query(returns => [Mobile], {name:'mobiles'})
    getAllMobile(){
        return this.mobileService.findAllMobiles();
    }


    @Query(returns => Mobile, {name:'mobile'})
    getMobileById(@Args({name:'mobileId', type:()=>Int}) id: number){
        return this.mobileService.findAllMobiles();
    }


    @Mutation(returns => String, {name:'addMobile'})
    deleteMobileById(@Args({name:'mobileId', type: () => Int}) id: number){
        return this.mobileService.deleteMobileById(id);
    }


    @Mutation(returns => String, {name:"addMobile"})
    addMobile(@Args("addMobileArgs") addMobileArgs:AddMobileArgs){
        return this.mobileService.addMobile(addMobileArgs);
    }


    @Mutation(returns => String, {name:"updateMobile"})
    updateMobile(@Args("updateMobileArgs") updateMobileArgs:UpdateMobileArgs){
        return this.mobileService.updateMobile(updateMobileArgs);
    }
    
}