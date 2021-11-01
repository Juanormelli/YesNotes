import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateNotetable1635797880696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("notes", new TableColumn(
            {
                name:"title",
                type:"varchar",
                isNullable: true
            
            },
        ) )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
