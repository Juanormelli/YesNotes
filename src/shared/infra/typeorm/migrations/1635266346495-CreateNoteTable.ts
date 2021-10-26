import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNoteTable1635266346495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "notes",
                columns: [
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary: true,
                    },
                    {
                        name:"user_id",
                        type:"uuid",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"content",
                        type:"text",

                    }



                ],
                foreignKeys:[
                    {
                        name:"FKNoteUser",
                        referencedTableName:"users", 
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                ]
            })
        )
        

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notes")
    }

}
