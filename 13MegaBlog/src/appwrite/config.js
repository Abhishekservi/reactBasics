import conf from "../conf/conf";

import {Client, Databases, Storage, Query, ID} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    
    async createPost({ title, slug, content, featuredImage, status, userId }){
        try {
            // Log the parameters to verify they are correct
            console.log("createPost parameters:", { title, slug, content, featuredImage, status, userId });

            return await this.databases.createDocument(
                conf.appwriteDatabseID,
                conf.appwritecollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            
        } catch (error) {
            console.log("Service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabseID,
            conf.appwritecollectionID,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        );
        
    } catch (error) {
        console.log("Service :: updatePost :: error", error);
    }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabseID,
                conf.appwritecollectionID,
                slug
            );
            return true;
        } catch (error) {
            console.log("Service :: deletePost :: error", error);
            return false;
        }
    }
    
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabseID,
                conf.appwritecollectionID,
                slug
            );
        } catch (error) {
            console.log("Service :: getPost :: error", error); 
            return false; 
            
        }
        
    }
    
    async getPosts(queries = [
        Query.equal("status", "active")
    ]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabseID,
                conf.appwritecollectionID,
                queries,
                
            )
        } catch (error) {
            console.log("Service :: allPosts :: error", error);
            return false;
        }
    }

    
    // File Upload Service
    async uploadFile(file) {
        try {    
            return await this.bucket.createFile(
                conf.appwritebucketID,
                ID.unique(),
                file,
            );
        } catch (error) {
            console.log("Service :: uploadFile :: error", error);
            return false;
        }
    }


    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwritebucketID,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        if (!fileId) {
            throw new Error('Missing fileId');
        }
        if (!conf.appwritebucketID) {
            throw new Error('Missing bucket ID');
        }
        return this.bucket.getFilePreview(
            conf.appwritebucketID,
            fileId
        );
    }
}




const service = new Service();

export default service;