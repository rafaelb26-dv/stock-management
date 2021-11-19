import {MigrationInterface, QueryRunner,Table, TableColumn} from "typeorm";

export class stockManagementStockCreateTable1636978812314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "general_stock",
            columns: [
                
                new TableColumn({
                    name: 'id_general_stock',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false
                }),

                new TableColumn({
                    name: 'id_general_company',
                    type: 'int',
                    isNullable: false,
                }),

                new TableColumn({
                    name: 'id_general_product',
                    type: 'int',
                    isNullable: false,
                }),

                new TableColumn({
                    name: 'description',
                    type: 'varchar(200)',
                    isNullable: false,
                }),


            ]
            
            
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('general_stock');


    }

}
